
# from pydantic import BaseModel | used as type guard
# from typing import Optional

import os
from io import BytesIO
from fastapi import HTTPException


# Set the JAVA_HOME environment variable to the Java installation directory
os.environ["JAVA_HOME"] = "/Library/Java/JavaVirtualMachines/jdk-22.jdk/Contents/Home"

import tabula


def convert_pdf(file):
    df_list = tabula.read_pdf(BytesIO(file), pages='all', output_format="json")
    
    if not df_list:
        raise HTTPException(status_code=400, detail="No tables found in the PDF")
    data = []
    for df in df_list:
        data.extend(df["data"])
    print(data)
    return data