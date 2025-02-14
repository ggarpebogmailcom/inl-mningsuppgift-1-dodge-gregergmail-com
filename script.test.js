// Importera funktionen vi vill testa
const { showContacts } = require('./src/script.js');

describe("Test av showContacts-funktionen", () => {
  test("Kontrollera att rätt kontakt returneras vid grupp 'familj'", () => {
    // Skapa samma contactBook som i din 'rätta kod'
    const contactBook = {
      owner: "Anna López",
      contacts: [
        { name: "Ahmed Ali", phone: "070-1234567", group: "arbete" },
        { name: "Chen Li", phone: "070-7654321", group: "vänner" },
        { name: "Isak Gran", phone: "070-1112223", group: "arbete" },
        { name: "Juan López", phone: "070-5556667", group: "familj" },
      ],
    };
    const groupToShow = "familj";

    // Kör funktionen
    const result = showContacts(contactBook, groupToShow);

    // Kolla att vi får rätt sträng tillbaka
    expect(result).toBe("Namn: Juan López, Telefon: 070-5556667");
  });

  test("Kontrollera att rätt kontakt returneras vid grupp 'arbete'", () => {
    const contactBook = {
      owner: "Anna López",
      contacts: [
        { name: "Ahmed Ali", phone: "070-1234567", group: "arbete" },
        { name: "Chen Li", phone: "070-7654321", group: "vänner" },
        { name: "Isak Gran", phone: "070-1112223", group: "arbete" },
        { name: "Juan López", phone: "070-5556667", group: "familj" },
      ],
    };
    const groupToShow = "arbete";

    // Kör funktionen
    const result = showContacts(contactBook, groupToShow);


    expect(result).toBe("Namn: Ahmed Ali, Telefon: 070-1234567");
  });
});
