<!DOCTYPE html>
<html>

<head>
    <title>Nuevo Mensaje</title>
</head>

<body>
    <h1>Nuevo Mensaje</h1>
    <p><strong>Nombre:</strong> {{ $data['name'] }}</p>
    <p><strong>Teléfono:</strong> {{ $data['celphone'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>
    <p><strong>Asunto:</strong> {{ $data['subject'] }}</p>
    <p><strong>Mensajes:</strong> {{ $data['message'] }}</p>
</body>

</html>
