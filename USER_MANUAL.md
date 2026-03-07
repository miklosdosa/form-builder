# Form Builder - Felhasználói Kézikönyv

## Tartalomjegyzék

1. [Bevezetés](#bevezetés)
2. [Kezdő lépések](#kezdő-lépések)
3. [Főbb funkciók](#főbb-funkciók)
4. [Lépésről lépésre útmutató](#lépésről-lépésre-útmutató)
5. [Mezőtípusok](#mezőtípusok)
6. [Elrendezés szerkesztése](#elrendezés-szerkesztése)
7. [Validáció és megjelenítési szabályok](#validáció-és-megjelenítési-szabályok)
8. [Előnézet](#előnézet)
9. [Hasznos tippek](#hasznos-tippek)

---

## Bevezetés

A Form Builder egy vizuális form készítő eszköz, amely lehetővé teszi több lépésből álló űrlapok létrehozását, szerkesztését és előnézetét. Az alkalmazás segítségével:

- Több lépésből álló űrlapokat hozhatsz létre
- Különböző típusú mezőket adhatsz hozzá
- Drag-and-drop módon rendezheted az elrendezést
- Validációs szabályokat állíthatasz be
- Feltételes megjelenítési szabályokat definiálhatsz
- Élőben megtekintheted az űrlapot

---

## Kezdő lépések

### Bejelentkezés

1. Nyisd meg az alkalmazást a böngészőben
2. A Keycloak bejelentkezési oldal jelenik meg
3. Add meg a felhasználóneved és jelszavad
4. Sikeres bejelentkezés után az űrlap szerkesztő felület jelenik meg

### Főoldal áttekintése

Az alkalmazás főoldala négy fő részből áll:

1. **Felső sáv (AppBar)**: Előnézet gomb és fiók menü
2. **Form Steps szekció**: Lépések kezelése
3. **Definition szekció** (bal oldal): Mezők definiálása és szerkesztése
4. **Layout szekció** (jobb oldal): Vizuális elrendezés szerkesztése

---

## Főbb funkciók

### 1. Form Steps (Űrlap lépések)

A Form Steps szekcióban több lépésből álló űrlapokat hozhatsz létre és kezelhetsz.

**Új lépés hozzáadása:**
- Kattints a "+" gombra a lépések listája mellett
- Add meg a lépés nevét
- Az új lépés automatikusan aktívvá válik

**Lépés kiválasztása:**
- Kattints egy lépésre a listában
- A kiválasztott lépés kék színnel jelenik meg
- A Definition és Layout szekciók a kiválasztott lépés mezőit mutatják

### 2. Definition (Mező definíciók)

A Definition szekcióban adhatsz hozzá és szerkeszthetsz mezőket.

**Új mező hozzáadása:**
1. Kattints a "+" ikonra a Definition szekció tetején
2. Válassz egy mezőtípust:
   - **TextField**: Szöveges beviteli mező
   - **Select**: Legördülő lista
   - **FieldArray**: Tömb mező (ismétlődő elemek)
   - **Boolean**: Jelölőnégyzet
   - **DateTime**: Dátum és idő választó

**Mező szerkesztése:**
- Kattints egy mező kártyájára a listában
- Három fül jelenik meg:
  - **Basic Data**: Alapvető mezőbeállítások
  - **Validation**: Validációs szabályok
  - **Display Rules**: Megjelenítési szabályok

**Mező törlése:**
- Kattints a mező kártyáján található törlés ikonra

### 3. Layout (Elrendezés)

A Layout szekcióban drag-and-drop módon rendezheted a mezőket.

**Elrendezés módosítása:**
- Húzd meg a mezőket a kívánt pozícióba
- A mezők 12 oszlopos rácsban helyezkednek el
- A változások automatikusan mentésre kerülnek

---

## Lépésről lépésre útmutató

### 1. lépés: Új űrlap létrehozása

1. Az alkalmazás megnyitásakor automatikusan egy "initial_step" nevű lépés jelenik meg
2. Opcionálisan hozzáadhatsz új lépéseket a Form Steps szekcióban

### 2. lépés: Mezők hozzáadása

1. Válaszd ki a lépést, amelyhez mezőket szeretnél hozzáadni
2. A Definition szekcióban kattints a "+" ikonra
3. Válassz egy mezőtípust
4. Az új mező megjelenik a listában

### 3. lépés: Mező beállítások szerkesztése

1. Kattints a mező kártyájára
2. **Basic Data fülön** állítsd be:
   - **ID**: Egyedi azonosító (automatikusan generálódik)
   - **Name**: Mező neve (kötelező)
   - **Label**: Megjelenített címke
   - **Placeholder**: Segéd szöveg
   - **Default Value**: Alapértelmezett érték
   - **Type**: Mező típusa (pl. text, email, password stb.)

3. Kattints a **Save** gombra a változások mentéséhez

### 4. lépés: Validációs szabályok beállítása

1. A mező szerkesztőben válaszd a **Validation** fület
2. Jelöld be az **Is Required** opciót, ha a mező kötelező
3. Add meg az **Error Message**-t, amely akkor jelenik meg, ha a validáció sikertelen
4. Kattints a **Save** gombra

### 5. lépés: Elrendezés testreszabása

1. Válts a **Layout** szekcióra
2. Húzd meg a mezőket a kívánt pozícióba
3. A mezők automatikusan igazodnak a 12 oszlopos rács szerint

### 6. lépés: Előnézet megtekintése

1. Kattints az **AppBar**-ban található **Preview** gombra
2. Egy modal ablakban megjelenik az űrlap előnézete
3. Teszteld az űrlap működését
4. Töltesd ki a mezőket és próbáld meg elküldeni

---

## Mezőtípusok

### TextField (Szöveges mező)

**Használat:**
- Rövid vagy hosszabb szövegek bevitele
- Email címek, telefonszámok stb.

**Beállítások:**
- **Type**: text, email, password, number, tel stb.
- **Placeholder**: Segéd szöveg
- **Default Value**: Alapértelmezett érték

### Select (Legördülő lista)

**Használat:**
- Előre definiált opciók közül választás

**Beállítások:**
- **Type**: select, multi-select, radio, checkbox
- **Options**: Opciók listája
- **Multiple**: Többszörös kiválasztás engedélyezése

**Opciók hozzáadása:**
1. A Basic Data fülön add meg az opciók nevét és értékeit
2. Minden opcióhoz megadhatsz ID-t, label-t és value-t

### FieldArray (Tömb mező)

**Használat:**
- Ismétlődő mezőcsoportok (pl. több telefonszám, cím stb.)

**Beállítások:**
- **Item Form Definition**: Az ismétlődő elemek definíciója
- **Add Label**: Gomb szövege új elem hozzáadásához
- **Remove Label**: Gomb szövege elem törléséhez
- **Direction**: Elrendezés iránya (horizontal/vertical)

### Boolean (Jelölőnégyzet)

**Használat:**
- Igen/nem választás
- Feltételek elfogadása

**Beállítások:**
- **Option**: A jelölőnégyzet szövege (label)

### DateTime (Dátum és idő)

**Használat:**
- Dátum és/vagy idő kiválasztása

**Beállítások:**
- **Default Value**: Alapértelmezett dátum
- **Type**: date, time, datetime

---

## Elrendezés szerkesztése

### Grid alapú elrendezés

Az űrlapok 12 oszlopos rácsban vannak elrendezve:

- **1-12 oszlop**: Mezők szélessége
- **Drag-and-drop**: Húzd meg a mezőket a kívánt pozícióba
- **Automatikus igazítás**: A mezők automatikusan igazodnak a rács szerint

### Layout mód

A Layout szekcióban két mód érhető el:

1. **Szerkesztő mód**: Drag-and-drop módon rendezheted a mezőket
2. **Előnézet mód**: Csak megtekintheted az elrendezést

---

## Validáció és megjelenítési szabályok

### Validációs szabályok

**Kötelező mező:**
1. Válaszd ki a mezőt
2. Nyisd meg a **Validation** fület
3. Jelöld be az **Is Required** opciót
4. Add meg az **Error Message**-t

**Egyedi validációs szabályok:**
- A jövőbeli verziókban további validációs típusok lesznek elérhetők (pl. min/max hossz, regex stb.)

### Megjelenítési szabályok (Display Rules)

A Display Rules segítségével feltételesen jeleníthetsz meg vagy engedélyezhetsz mezőket.

**Példa:**
- Ha a "Newsletter" mező értéke "Igen", akkor jelenjen meg az "Email" mező
- Ha egy mező értéke "X", akkor tiltsd le a másik mezőt

**Beállítás:**
1. Válaszd ki a mezőt
2. Nyisd meg a **Display Rules** fület
3. Add meg a feltételt:
   - **Field**: Melyik mező értékét figyeld
   - **Condition**: Milyen feltétel (pl. equals)
   - **Value**: Milyen érték esetén
   - **Action**: Mit csináljon (show/hide, enable/disable)

---

## Előnézet

### Előnézet megnyitása

1. Kattints az **AppBar** tetején található **Preview** gombra
2. Egy modal ablakban megjelenik az űrlap előnézete

### Előnézet funkciók

- **Lépések közötti navigáció**: Ha több lépés van, válthatsz közöttük
- **Űrlap kitöltése**: Teszteld az összes mezőt
- **Validáció tesztelése**: Ellenőrizd, hogy a validációs szabályok működnek-e
- **Submit**: Küldés gomb az adatok elküldéséhez (jelenleg csak alert-et mutat)

### Előnézet korlátok

- Az előnézet nem menti az adatokat
- A submit gomb jelenleg csak egy alert-et mutat
- A változások nem kerülnek mentésre az előnézetből

---

## Hasznos tippek

### 1. Lépések használata

- Használj több lépést, ha az űrlap hosszú vagy összetett
- Nevezd el érthetően a lépéseket (pl. "Személyes adatok", "Kapcsolati információk")
- A lépések sorrendje fontos - gondold át a felhasználói élményt

### 2. Mezők elnevezése

- Használj konzisztens elnevezési konvenciókat
- A "name" mezőnek egyedinek kell lennie egy lépésen belül
- Használj leíró neveket (pl. "firstName" helyett ne használj csak "f1"-et)

### 3. Elrendezés optimalizálása

- Ne töltsd túl az egyes sorokat - legfeljebb 2-3 mezőt helyezz el egymás mellett
- Használj üres helyeket az olvashatóság javításához
- Fontos mezőket helyezz a tetejére

### 4. Validáció

- Mindig állíts be validációs szabályokat kötelező mezőkhöz
- Használj érthető hibaüzeneteket
- Teszteld a validációt az előnézetben

### 5. Munkafolyamat

1. Először add hozzá az összes mezőt
2. Állítsd be az alapvető beállításokat
3. Rendezd el a mezőket a Layout szekcióban
4. Állíts be validációs szabályokat
5. Teszteld az előnézetben
6. Finomhangold az elrendezést és a beállításokat

### 6. Hibaelhárítás

**Mező nem jelenik meg:**
- Ellenőrizd, hogy a megfelelő lépést választottad-e ki
- Nézd meg, hogy nincs-e display rule, ami elrejti

**Változások nem mentődnek:**
- Mindig kattints a **Save** gombra a mező szerkesztése után
- Ellenőrizd, hogy nincs-e validációs hiba

**Elrendezés nem működik:**
- Győződj meg róla, hogy a Layout szekcióban vagy
- Próbáld meg frissíteni az oldalt

---

## Gyakori kérdések (FAQ)

### Hogyan törölhetek egy mezőt?

Kattints a mező kártyáján található törlés ikonra (🗑️).

### Hogyan változtathatom meg a mezők sorrendjét?

A Layout szekcióban drag-and-drop módon húzd meg a mezőket a kívánt pozícióba.

### Hogyan adhatok hozzá új lépést?

A Form Steps szekcióban kattints a "+" gombra és add meg a lépés nevét.

### Menti az alkalmazás az adatokat?

Jelenleg az alkalmazás csak a böngésző memóriájában tárolja az adatokat. Az oldal újratöltésekor az adatok elvesznek. Ez egy ismert korlátozás, amelyet a jövőbeli verziókban javítanak.

### Hogyan működik a Preview?

A Preview egy modal ablakban mutatja az űrlapot, ahogy a végfelhasználók látnák. Itt tesztelheted az összes funkciót, de a változások nem kerülnek mentésre.

---

## Támogatás

Ha problémába ütközöl vagy kérdésed van:

1. Ellenőrizd ezt a kézikönyvet
2. Nézd meg a konzol hibáit (F12 → Console)
3. Frissítsd az oldalt és próbáld újra

---

**Verzió:** 1.0  
**Utolsó frissítés:** 2026. február
