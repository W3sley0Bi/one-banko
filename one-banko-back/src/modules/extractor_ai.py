import pdftotext
from openai import OpenAI
from dotenv import load_dotenv
import os
from io import BytesIO



load_dotenv()
load_dotenv(dotenv_path=".env.local", override=True)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def convert_pdf_ai(file):
    pdf = pdftotext.PDF(BytesIO(file), physical=True)
    extracted_text = ""

    for text in pdf:
        extracted_text += text + "\n"

    return extracted_text



def fun_gpt(file):

  pdf_text = convert_pdf_ai(file)
  print(pdf_text)

  system_message = "You are a bank statement converter assistant. By giving you bank statement, you il will turn the recived bank statement into a JSON file containing the following fields: name of the bank, date of the transactions, descriptions of the transactions, categories of the transactions, type of operation (received or spent) and amount of type number. the date field should have the following format: YYYY-MM-DD. The catergory should always be translated to english before being stored. It's important not to skip any transaction or important information! Write ALL the informations!"

  # completion = client.chat.completions.create(
  #   model="gpt-3.5-turbo-0125",
  #   response_format={ "type": "json_object" },
  #   messages=[
  #     {"role": "system", "content": system_message},
  #     {"role": "user", "content": pdf_text}
  #   ]
  # )
  # return completion.choices[0].message