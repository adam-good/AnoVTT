from sqlalchemy import Column, Integer, String
from webapp.database import Base
from werkzeug.security import check_password_hash, generate_password_hash

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True)
    pwdhash = Column(String(50))

    def __init__(self, username: str = None, password: str = None):
        self.username = username
        self.pwdhash = generate_password_hash(password)

    def __repr__(self):
        return f'{self.serialize}'
    
    def validate(self, password: str):
        return check_password_hash(self.pwdhash, password)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username
        }
