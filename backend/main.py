from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfMerger
import io

app = FastAPI()

# Allow React frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # change later for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/merge")
async def merge_pdfs(files: list[UploadFile] = File(...)):
    
    merger = PdfMerger()

    for file in files:
        content = await file.read()
        merger.append(io.BytesIO(content))

    output = io.BytesIO()
    merger.write(output)
    merger.close()

    output.seek(0)

    return StreamingResponse(
        output,
        media_type="application/pdf",
        headers={
            "Content-Disposition": "attachment; filename=merged.pdf"
        },
    )