
from typing import Union
from fastapi import APIRouter, File, UploadFile, Request, Response, Depends
from fastapi.responses import JSONResponse
from modules.extractor_ai import fun_gpt
from modules.auth.validateJWT import validateJWT

router = APIRouter()

@router.post("/extractor")
async def upload_file(req: Request, res: Response, jwt_data = Depends(validateJWT), file: UploadFile = File(...)):
    # json_data = convert_pdf(await file.read())
    json_data_ai = fun_gpt(await file.read())

    return json_data_ai
