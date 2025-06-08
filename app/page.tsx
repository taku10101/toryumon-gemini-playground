import styles from "./page.module.css";
import GeminiAPI from "./actions/ai";
export default function Home() {
  return (
    <div className={styles.page}>
      <form
        action={async (formData: FormData) => {
          "use server";
          const prompt = formData.get("prompt");
          if (typeof prompt === "string") {
            await GeminiAPI(prompt);
          }
        }}
      >
        <input type="text" name="prompt" />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
