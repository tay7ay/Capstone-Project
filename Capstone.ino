#include <SPI.h>
#include <MFRC522.h>
#include <Keyboard.h>

#define RST_PIN 6
#define SS_PIN 11

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  Keyboard.begin();
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  String uidString = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    if (rfid.uid.uidByte[i] < 0x10) {
      uidString += "0";
    }
    uidString += String(rfid.uid.uidByte[i], HEX);
  }

  Serial.print("Card UID: ");
  Serial.println(uidString);

  Keyboard.print(uidString);
  Keyboard.write('\n');

  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}
void printUID(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    char hex_val[3];
    snprintf(hex_val, sizeof(hex_val), "%02X", buffer[i]);
    Keyboard.print(toupper(hex_val[0]));
    Keyboard.print(toupper(hex_val[1]));
  }
}

