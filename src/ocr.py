# ## compute_input.py

# import sys, json,requests, numpy as np


# #=======================================================
# import fitz
# pdf_documento="f1.pdf"
# documento= fitz.open(pdf_documento)
# numero=documento.pageCount)
# print("Metadatos: ",documento.metadata)
# pagina = documento.loadPage(0)
# text= pagina.getText("text")
# print(text)
# #=======================================================

# resp={
#  "Response":200,
#  "Message":"Hello From Python holaaa"
#  "text":numero

# }



# print(json.dumps(resp))
# sys.stdout.flush()

## compute_input.py

import sys, json,requests, numpy as np
#url="https://opensourcepyapi.herokuapp.com:433/weather/06604"
#r= requests.get(url)
#data= r.json()

resp={
 "Response":200,
 "Message":"Hello From Python File"

}

print(json.dumps(resp))
sys.stdout.flush()