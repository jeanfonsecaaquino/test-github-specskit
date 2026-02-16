## Person Use Case

O Caso de uso person tem por objetivo criar um endpoint bem como sua entidade e classe DTO.

Person terá os seguintes campos:

- name
- lastname
- email
- birthdate
- picture-url
- active

# Deverão ter endpoints do crud básico de person
# O active será uma excusão lógica e não deverá permitir que seja excluido um usuario previamente excluido
# Deverá ter uma validação no limite de data minimo de nascimento pra que o usuário seja maior de idade (18 anos)
# Caso ele receba um registro de um email ja existente deverá ter uma validação que retornará um BadRequest com a mensagem json {msg: "Email ja registrado"}