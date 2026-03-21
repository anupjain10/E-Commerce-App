# from django.contrib import admin
# from .models import CustomUser
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# # Register your models here.
# class CustomAdminUser(BaseUserAdmin):

#     list_display = ["id", "email", "name", "contact", "is_admin"]
#     list_filter = ["is_admin"]
#     fieldsets = [
#         ("User Credentials", {"fields": ["email", "password"]}),
#         ("Personal info", {"fields": ["name", "contact"]}),
#         ("Permissions", {"fields": ["is_admin"]}),
#     ]
    
#     add_fieldsets = [
#         (
#             None,
#             {
#                 "classes": ["wide"],
#                 "fields": ["email", "name", "contact", "password1", "password2"],
#             },
#         ),
#     ]
#     search_fields = ("email")
#     ordering = ("email","id")
#     filter_horizontal = []
    
# admin.site.register(CustomUser, CustomAdminUser)


from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class CustomAdminUser(BaseUserAdmin):

    list_display = ["id", "email", "name", "contact", "is_staff", "is_superuser"]
    list_filter = ["is_staff", "is_superuser"]

    fieldsets = (
        ("User Credentials", {"fields": ("email", "password")}),
        ("Personal info", {"fields": ("name", "contact")}),
        ("Permissions", {"fields": ("is_staff", "is_superuser", "is_active")}),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "name", "contact", "password1", "password2"),
            },
        ),
    )

    search_fields = ("email",)
    ordering = ("email", "id")
    filter_horizontal = ()


admin.site.register(CustomUser, CustomAdminUser)