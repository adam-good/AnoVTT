from sqlalchemy import Column, Integer, String
from webapp.database import Base

class Statblock(Base):
    __tablename__ = "statblocks"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    might = Column(Integer)
    edge = Column(Integer)
    grit = Column(Integer)
    wits = Column(Integer)

    def __init__(self, name: str = None, might: int = None, 
                 edge: int = None, grit: int = None, wits: int = None):
        self.name = name
        self.might = might
        self.edge = edge
        self.grit = grit
        self.wits = wits

    def __repr__(self):
        return f'{self.serialize}'

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'might': self.might,
            'edge': self.edge,
            'grit': self.grit,
            'wits': self.wits
        }
    