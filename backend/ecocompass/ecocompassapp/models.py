from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.timezone import now

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, user_type='Company'):
        if not email:
            raise ValueError("Users must have an email address")
        if not name:
            raise ValueError("Users must have a name")
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, user_type=user_type)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password, user_type='Admin')
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = [('Company', 'Company'), ('Investor', 'Investor')]

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255, default="Unknown")  # Add this field for Full Name
    user_type = models.CharField(max_length=15, choices=USER_TYPES, default='Company')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']  # Ensure name is required for superusers

    def __str__(self):
        return f"{self.name} ({self.email} - {self.user_type})"
    
class ESGAnalysis(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="esg_analysis")  
    file_name = models.CharField(max_length=255)  # File name if applicable
    esg_analysis = models.JSONField()  # Store ESG category scores as JSON
    esg_score = models.FloatField()
    uploaded_at = models.DateTimeField(default=now)  # Auto timestamp
    

    def __str__(self):
        return f"{self.user.name} - {self.file_name} - ESG Score: {self.esg_score}"

