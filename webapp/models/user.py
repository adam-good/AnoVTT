from sqlalchemy import Column, Integer, String
from webapp.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True)

    def __init__(self, username=None):
        self.username = username

    def __repr__(self):
        return f'{self.serialize}'

    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username
        }
