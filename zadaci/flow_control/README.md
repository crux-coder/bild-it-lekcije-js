# Zadaci

1.  Napisati program koji izracunava povrsinu kruga. Poluprecnik kruga spremiti u varijablu, zatim izracunati povrsinu kruga ispisati korisniku rezultat. Formula za izracunavanje povrsine kruga:

    r \* r \* PI (π)

    Primjer ispisa programa: 'Povrsina kruga poluprecnika 20.7 je 1346.14. [Rjesenje](https://github.com/dotundefined/bild-it-lekcije-js/blob/dev/zadaci/flow_control/zadatak1.js)

2.  Napisati program koji pretvara konvertibilne marke (KM) u Euro. Kolicinu u konvertibilnim markama spremiti u varijablu, a zatim izracunati vrijednost u eurima i ispisati poruku.

    Primjer ispisa programa: '70 KM je 35.89 eura.'

    Uzmimo da je 1 Euro = 1.95KM [Rjesenje](https://github.com/dotundefined/bild-it-lekcije-js/blob/dev/zadaci/flow_control/zadatak2.js)

3.  Napisati program koji racuna prosjek 3 broja. Koristiti 3 proizvoljna broj, izracunati prosjek tih brojeva te ispisati korisniku isti.

    Primjer ispisa programa: 'Prosjek brojeva 2, 4 i 6 je 4.' [Rjesenje](https://github.com/dotundefined/bild-it-lekcije-js/blob/dev/zadaci/flow_control/zadatak3.js)

4.  Napisati program koji racuna BMI (Body Mass Index). BMI se racuna po formuli: BMI = tezina /(visina \* visina), gdje je tezina u kilogramima a visina u metrima. Tezinu i visinu spremiti u varijable. Na osnovu izracunate vrijednosti ispisati odgovarajucu poruku iz ove tabele:

    | BMI vrijednost    | Kategorija    |
    | ----------------- | ------------- |
    | BMI < 18.5        | Pothranjenost |
    | 18.5 ≤ BMI < 25.0 | Normalan BMI  |
    | 25.0 ≤ BMI < 30.0 | Gojaznost     |
    | BMI >= 30.0       | Pretilost     |

    Primjer ispisa programa: 'Za visinu od 1.75m i tezinu od 70kg vas BMI je 22.9. To spada u kategoriju: Normalan BMI' [Rjesenje](https://github.com/dotundefined/bild-it-lekcije-js/blob/dev/zadaci/flow_control/zadatak4.js)

5.  Napisati program koji na osnovu broja bodova koje je student osvojio ispisuje ocjenu koju je student zasluzio. Broj bodova predstaviti varijablom.

    0-49 ocjena je 5  
    50 - 59 ocjena je 6  
    60 - 69 ocjena je 7  
    70 - 79 ocjena je 8  
    80 - 89 ocjena je 9  
    90 - 100 ocjena je 10.

    Ukoliko je broj bodova veci od 100 ili manji od 0 ispisati poruku "Pogresan unos", u suprotnom ispisati poruku kao u primjeru ispod.

    Primjer ispisa programa: 'Za osvojenih 74 boda dobili ste ocjenu 8.' [Rjesenje](https://github.com/dotundefined/bild-it-lekcije-js/blob/dev/zadaci/flow_control/zadatak5.js)

6.  Napisati program koji na osnovu radiusa (r) i visine (H) cilindra racuna njegovu povrsinu i zapreminu koristeci se sljedecim formulama:

    P = 2 _ r _ r _ π + H _ 2 _ r _ π  
    V = r _ r _ π \* H

    Radius i visinu cilindra predstaviti varijablama. Za radius i visinu koristiti proizvoljne vrijednosti. Nakon sto program izracuna povrsinu i zapreminu treba da ispise iste korisniku.

    Primjer ispisa programa: ‘Za cilindar radiusa 5.5 i visine 12 povrsina iznosi 604.757 a zapremina 1140.398.’

7.  Napisati program koji na osnovu duzine ivice kocke (a) racuna povrsinu i zapreminu kocke. Zapremina kocke se racuna po formuli:

    V = a _ a _ a.

    Povrsina se racuna po formuli:

    P = 6 _ a _ a.

    Duzinu ivice kocke predstaviti varijablom, i uzeti proizvoljnu vrijednost. Nakon sto program izracuna zapreminu i povrsinu kocke ispisati iste korisniku kao u primjeru ispod.

    Primjer ispisa programa: ‘Za kocku kod koje je duzina ivice 7.5 zapremina iznosi 421,88 a povrsina je 337.5.’

8.  Napisati program koji racuna iznos popusta na gotovinsko placanje robe i cijenu te robe sa popustom. Pocetnu cijenu robe i popust u procentima predstaviti varijablama. Nakon sto program izracuna iznos popusta i cijenu robe sa popustom program treba da ispise iste kao u primjeru ispod.

    Primjer ispisa programa: ‘Za robu sa cijenom od 175.5KM i popustom od 12%, iznos popusta je 21.06 KM a cijena robe sa popustom iznosi 154.44 KM.’

9.  Napisati program koji na osnovu broja minuta (npr. 1 milijardu) ispisuje koliko je to u godinama i danima. Zbog jednostavnosti,
    pretpostavimo da godina ima 365 dana. Broj minuta predstaviti varijablom. Nakon sto program izracuna koliko je to vremena u godinama i danima program treba da ispise poruku kao u primjeru ispod:

        Primjer ispisa programa: ‘1000000000 minuta je otprilike 1902 godine i 214 dana.’

10. Napisati program koji ispituje da li je trocifreni cijeli broj palindrom. Broj je palindrom ako je isti citajuci s lijeva na desno i s desna na lijevo. Trocifreni cijeli broj predstaviti varijablom. Nakon sto program provjeri da li je taj broj palindrom, ispisuje jednu od sljedecih poruka:

    Primjer ispisa programa ako je broj palindrom: ‘Broj 121 je palindrom.’
    Primjer ispisa programa ako broj nije palindrom: ‘Broj 123 nije palindrom.’

11. Napisati program koji na osnovu iznosa racuna koji se treba uplatiti kao i procenat tog racuna kojeg zelimo platiti kao napojnicu izracunava ukupan racun i napojnicu. Iznos racuna i procenat tog racuna kojeg zelimo platiti kao napojnicu predstaviti varijablma. Nakon sto program izracuna napojnicu i ukupan racun ispisuje sljedecu poruku.

    Primjer ispisa programa: ‘Za racun od 74 KM i napojnicu od 14.5 %, iznos napojnice je 10.73 KM a ukupan iznos racuna je 84.73 KM’

12. Napisati program koji sabira cifre trocifrenog cijelog broja. Trocifren cijeli broj predstaviti varijablom. Nakon sto program sabere cifre ispisati sljedecu poruku.

    Primjer ispisa programa: ‘Zbir cifara broja 235 je 10.’

13. Napisati program koji ispituje da li je cijeli broj paran ili neparan. Cijeli broj predstaviti varijablom. U zavisnosti od toga da li je broj paran ili neparan ispisati jednu od sljedecih poruka.

    Primjer ispisa programa ako je broj paran: ‘Broj 12 je paran.’
    Primjer ispisa programa ako je broj neparan: ‘Broj 23 je neparan.’

14. Napisati program koji ispisuje ime mjeseca na osnovu cijelog broja. (1 - Januar, 2 - Februar, ... , 12 - Decembar ). Cijeli broj predstaviti varijablom. Na osnovu cijelog broja ispisati sljedecu poruku.

    Primjer ispisa programa: ‘Broju 7 odgovara mjesec: Juli.’

15. Napisati program koji ispisuje 3 proizvoljna cijela broja u rastucem redoslijedu. 3 cijela broja predstaviti varijablama. U zavisnosti od ovih brojeva ispisati sljedecu poruku.

    Primjer ispisa programa: : ‘Tri cijela broja: 4, 1 i 3 u rastucem obliku izgledaju ovako: 1 3 4.’
