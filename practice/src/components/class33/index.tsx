import { useCounterContext } from "../../context-hooks/useCounter";
import { useLocaleContext } from "../../context-hooks/useLocale";
import { Words } from "../../utils/language";

function Class33() {
  //   // remove the values from array which occur more than once

  //   const arr = [1, 2, 3, 3, 4, 5];
  //   const output: number[] = [];
  //   arr.forEach((a) => {
  //     if (!output.includes(a)) {
  //       output.push(a);
  //     } else {
  //       output.pop();
  //     }
  //   });

  //   console.log(output);

  //   // objects key value pares practice

  //   const dict = {
  //     en: {
  //       welcome: "Welcomee",
  //       login: "Login",
  //     },
  //     de: {
  //       welcome: "Welkommen",
  //       login: "Login",
  //     },
  //     ar: {
  //       welcome: "مرحباً",
  //       login: "تسجيل الدخول",
  //     },
  //   };
  //   console.log(JSON.stringify(dict, null, 2));

  //   function translate(locale: string, word: string) {
  //     return dict[locale][word];
  //   }

  //   console.log(translate("ar", "welcome"));

  //   // use the same thing using a map data structure with type safety

  //   const dict2 = new Map<string, Record<string, string>>();
  //   dict2.set("ar", { welcome: "مرحباً" });

  //   console.log(dict2.get("ar")["welcome"]);

  //   // remove spaces from a string
  //   const name2 = "swiss miss";
  //   console.log(name2.split(" ").join(""));

  //   // sort array of objects by a specific string value
  //   const users = [
  //     { id: 1, name: "Alice Johnson", role: "admin", active: true },
  //     { id: 2, name: "Bob Johnson", role: "user", active: true },
  //     { id: 3, name: "Carol White", role: "user", active: false },
  //     { id: 4, name: "Bob White", role: "user", active: false },
  //     { id: 5, name: "Abdullah White", role: "user", active: false },
  //   ];

  //   console.log(
  //     JSON.stringify(
  //       users.sort((a, b) => a.name.localeCompare(b.name)),
  //       null,
  //       2
  //     )
  //   );

  const { count, increment, decrement, reset } = useCounterContext();
  const { locale, setLocale, t } = useLocaleContext();

  return (
    <div>
      <p className="text-2xl font-bold">
        {t(Words.LOCALE)} {locale}
      </p>
      <button className="btn btn-primary m-4" onClick={() => setLocale("en")}>
        {t(Words.ENGLISH)}
      </button>
      <button className="btn btn-primary m-4" onClick={() => setLocale("ar")}>
        {t(Words.ARABIC)}
      </button>
      <button className="btn btn-primary m-4" onClick={() => setLocale("de")}>
        {t(Words.GERMAN)}
      </button>
      <p className="text-2xl font-bold">
        {t(Words.COUNT)} {count}
      </p>
      <button className="btn btn-primary m-4" onClick={increment}>
        {t(Words.INCREMENT)}
      </button>
      <button className="btn btn-primary m-4" onClick={decrement}>
        {t(Words.DECREMENT)}
      </button>
      <button className="btn btn-primary m-4" onClick={reset}>
        {t(Words.RESET)}
      </button>
    </div>
  );
}

export default Class33;
