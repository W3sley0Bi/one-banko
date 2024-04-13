
from typing import Union
from fastapi import APIRouter, File, UploadFile
from modules.extractor import convert_pdf
from fastapi.responses import JSONResponse



router = APIRouter()


@router.get("/")
def test():
    return { "hello" : "ciao" }

@router.post("/extractor")
async def upload_file(file: UploadFile = File(...)):
    json_data = convert_pdf(await file.read())
    return JSONResponse(content=json_data)




# endpoints for our frontend 

# @router.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None, token : str = Depends(token_auth_scheme)):
#     result = VerifyToken(token.credentials).verify()
#     print(result)
#     return result

# @router.get("/login/{user_id}")
# def login(user_id: str):
#     access_token = get_access_token(user_id)
#     return access_token

# @router.post("/dashboard")
# def handle_dahsboard(request_data : UserInfoDashboard = Body(...), token : str = Depends(token_auth_scheme)):
#     result = VerifyToken(token.credentials).verify()
#     # TODO: check the result before sendiing the request
#     print(result)
#     return get_dashboard(request_data)

# @router.post("/newrequest")
# async def handle_new_request(request_data : UserInfoNewRequest = Body(...), token : str = Depends(token_auth_scheme)):
#     result = VerifyToken(token.credentials).verify()
#     # TODO: check the result before sendiing the request
#     print(result)
#     return new_request_func(request_data)


# @router.post("/mycertificates")
# async def handle_get_my_certificates(request_data : UserInfoDashboard = Body(...), token : str = Depends(token_auth_scheme)):
#     result = VerifyToken(token.credentials).verify()
#     # TODO: check the result before sendiing the request
#     print(result)
#     return get_my_certificates(request_data)





