from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from webapp.database import Base
from werkzeug.security import check_password_hash, generate_password_hash

class User(Base):
    __tablename__: str = "users"

    id:         Mapped[int]        = mapped_column(Integer, primary_key=True)
    username:   Mapped[str | None] = mapped_column(String(50), unique=True)
    pwdhash:    Mapped[str | None] = mapped_column(String(50))

    def __init__(self, username: str|None = None, password: str|None = None):
        self.username = username
        self.pwdhash = generate_password_hash(password) if password else None

    def __repr__(self):
        return f'{self.serialize}'
    
    def validate(self, password: str) -> bool:
        if self.pwdhash is not None:
            return check_password_hash(self.pwdhash, password)
        else:
            return False
    
    @property
    def serialize(self) -> dict[str, object]:
        return {
            'id': self.id,
            'username': self.username,
            'hash': self.pwdhash
        }
