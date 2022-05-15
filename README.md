# API hackTheOceanBack

GET http://147.182.237.110:5000


### Login 
POST http://147.182.237.110:5000/auth/login
Content-Type: application/json

{
    "username":"leduardo.mp@gmail.com",
    "password":"123456"
}

### Logout
POST http://147.182.237.110:5000/auth/logout
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo



### Usuarios
GET http://147.182.237.110:5000/usuario/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo

### Usuarios
GET http://147.182.237.110:5000/usuario/leduardo.mp@gmail.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo

### Usuarios
POST http://147.182.237.110:5000/usuario/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo
Content-Type: application/json

{
    "email":"leduardo.mp@hotmail.com",
    "idTipoUsuario":"1",
    "nombre":"Carlos",
    "apPaterno": "Lopez",
    "apMaterno": "Mora",
    "telContacto": "5520202034"
}

### Usuarios
PUT http://147.182.237.110:5000/usuario/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo
Content-Type: application/json

{
    "email":"leduardo.mp@hotmail.com",
    "idTipoUsuario":"2",
    "nombre":"Ramon",
    "apPaterno": "Lopez",
    "apMaterno": "Mora",
    "telContacto": "5520202034"
}

### Usuarios
DELETE http://147.182.237.110:5000/usuario/leduardo.mp@hotmail.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo
Content-Type: application/json



### Tipos de Usuarios
GET http://147.182.237.110:5000/tiposUsuario
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo



### Crear Empresa afiliada
POST http://147.182.237.110:5000/afiliadas/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo
Content-Type: application/json

{
    "nombre":"mariscos la fina",
    "direccion":"Boulevard Francisco Villa #44, Mazatlan, Sinaloa, Mexico ",
    "telContacto":"72453423",
    "promocion": "5% de descuento en el total de su cuenta",
    "latitud": "23.254921",
    "longitud": "-106.457858"
}


### Listado general de Empresa afiliada
GET http://147.182.237.110:5000/afiliadas/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlZHVhcmRvLm1wQGdtYWlsLmNvbSIsInJvbCI6MywiaWF0IjoxNjUyNTg3MzExLCJleHAiOjE2ODQxMjMzMTF9.eZNv-jVFLfuID8NtSNO-UKu3fWVp4rEQhnn-t3ZhjMo


