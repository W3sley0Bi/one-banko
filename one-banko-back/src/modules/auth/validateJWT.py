from supabase import create_client, Client
from dotenv import load_dotenv
import os
from fastapi import HTTPException, Header

load_dotenv()
load_dotenv(dotenv_path=".env.local", override=True)

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_ANON_KEY")



# TODO: this is how you do a validation without additional calls -> https://depshub.com/blog/using-supabase-auth-as-a-service-with-a-custom-backend/
async def validateJWT(authorization: str = Header(...)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header is missing")
    
    try:
        # Assuming the authorization header is of the form "Bearer <token>"
        jwt_token = authorization.split()[1]  # Extract the token part
        supabase: Client = create_client(url, key)
        data = supabase.auth.get_user(jwt_token)
        return data
    except IndexError:
        # If the header doesn't contain the token part
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    except Exception as e:
        # Other exceptions (e.g., invalid token, connection error)
        raise HTTPException(status_code=401, detail="Invalid JWT token")


