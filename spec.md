# Fejlesztői leírás

## Technológia
* JAVASCRIPT
* HTML
* CSS

## Játéktér leírása
* Egy div, ami magába foglalja a többi divet, amelyek display inline beállításúak.
* Méretezést egy függvénnyel oldjuk meg, amely lefut egyszer az oldal megnyitásakor, 
majd akkor is, ha átméretezik az oldalt.
* A négyszetek szélességét százalékosan adjuk meg. 
* Egy legördülő menüben lehet kiválasztani a játéktér szélességét.
* "tile" osztályhoz rendeljük az egyes csempéket.
* Az eledel tile osztálya "food", a kígyó tile osztálya "snake".az üres csempe osztálya pedig empty.

## A kígyó mozgása
* A "new ame" gomb hatására a kígyó középen megjelenik.
* Azonnal indul a kígyó jobbra.
* Lépésenkénti ellenőrzés: a csempe osztályát vizsgáljuk. Ha snake az osztály, legyen vége a játéknak.
Ha food, akkor nő egyet a kígyó. Ha nincs olyan csempe, ahová lépni akar a fej, akkor vége a játéknak.
* Irányítás: keydown eseményre változtatjuk az irányt. 
* Óraütésre mindig elvégezzük az összes ellenőrzést egy metódussal.
* A kígyó testét egy tömbben tároljuk, és lépés esetén minden tömbelem az előző helyére lép.

## Pontok
* A points változóban tároljuk az aktuális pontokat.
* Egy eledel egy pontot ér.
* Random jelenik meg egyszerre 1 eledel.
* Ellenőrzés, hogy ne a kígyó testére essen az eledel pozíciója.
* Ha a kígyó rálép az eledelre, akkor növeljük a pontokat, és átállítjuk az osztályokat.
* Az eledel elfogyasztása után újat generálunk.