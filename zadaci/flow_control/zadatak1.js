// Napisati program koji izracunava povrsinu kruga.
// Poluprecnik kruga spremiti u varijablu, zatim izracunati povrsinu kruga ispisati korisniku rezultat. Formula za izracunavanje povrsine kruga:
// r * r * PI (π)
// Primjer ispisa programa: 'Povrsina kruga poluprecnika 20.7 je 1346.14.'

const r = 20.7;

const surfaceArea = r * r * Math.PI;

console.log(`Povrsina kruga poluprecnika ${r} je ${surfaceArea}`);
