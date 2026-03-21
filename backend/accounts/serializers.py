import re
from rest_framework import serializers
from accounts.models import CustomUser
from django.contrib.auth import authenticate


# Register
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ["email", "name", "contact", "password", "confirm_password"]
    
    # validation for password
    def validate(self, attrs):
        password = attrs.get('password')
        confirm_password = attrs.get('confirm_password')

        if password != confirm_password:
            raise serializers.ValidationError("Password do not match!")
            return 
        return attrs
    
    # validation for email
    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists!")
        return value
    
    # validation for contact using regex
    def validate_contact(self, value):
        pattern = r"^[6-9]\d{9}$"
        if not re.match(pattern, value):
            raise serializers.ValidationError(
                "Enter a valid Indian mobile number."
            )
        return value
    
    # create user 
    def create(self,validated_data):
        validated_data.pop('confirm_password')
        user = CustomUser.objects.create_user(
            email = validated_data['email'],
            name = validated_data['name'],
            contact = validated_data['contact'],
            password = validated_data['password'],
        )
        user.is_active = True
        user.save()
        return user

# Login 
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(email=email, password=password)
        # print("User", user)

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        if not user.is_active:
            raise serializers.ValidationError("Account not activated")

        attrs["user"] = user
        return attrs


    