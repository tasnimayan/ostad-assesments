In this assignment, you have to create a Student Register (CRUD) project using express.js

You have to make three models and they are: - StudentsModel, WorksModel, OTPModel

1. Will be in the StudentsModel:- email(String), firstName(String), lastName(String), mobile(String), password(String), address(String), roll(String), class(String).
2. Will be in the WorksModel:- title(String), classNote(String), description(String), status(String), email(String).
3. Will be in the OTPModel:- email(String), otp(String), status(Number).

Requirements:

You need to create crud operations around the StudentsModel.

Of course, you need to generate a token by jwt when the user login.

You need to create crud operations around the WorksModel. When a process is executed with WorksModel, it must be verified by the token. That means you have to use AuthVerifyMiddleware.

Optional:

1. Create a password reset system - Student can recover his password.
