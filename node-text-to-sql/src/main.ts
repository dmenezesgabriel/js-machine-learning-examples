import "./set-proxy";
import {
  pipeline,
  env as hfEnv,
  Text2TextGenerationPipeline,
  TextGenerationConfig,
} from "@huggingface/transformers";

class TextToSqlPipeline {
  static instance: null | Promise<Text2TextGenerationPipeline> = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      hfEnv.cacheDir = "./.cache";

      this.instance = pipeline(
        "text2text-generation",
        "Xenova/t5-small-awesome-text-to-sql"
      );
    }

    return this.instance;
  }
}

async function main() {
  const textToSql = await TextToSqlPipeline.getInstance();

  const options: Partial<TextGenerationConfig> = {
    max_new_tokens: 300,
  };

  const response = await textToSql(
    `Tables:
      CREATE TABLE student_course_attendance (student_id VARCHAR);
      CREATE TABLE students (student_id VARCHAR);
    ---
    Query for: List the id of students who never attends courses?
    `,
    options
  );

  console.log(response);
}

await main();
