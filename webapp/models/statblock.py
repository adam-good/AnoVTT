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
    physical_defence = Column(Integer)
    sorcery_defence = Column(Integer)
    life_points = Column(Integer)
    stamina_points = Column(Integer)
    flex_die = Column(String) # TODO: This will probably need some logic

    def __init__(self, name: str = None, might: int = None, 
                 edge: int = None, grit: int = None, wits: int = None,
                 phy_def: int = None, sor_def: int = None, 
                 life_points: int = None, flex_die: str = None):
        self.name = name
        self.might = might
        self.edge = edge
        self.grit = grit
        self.wits = wits
        self.physical_defence = phy_def
        self.sorcery_defence = sor_def
        self.life_points = life_points
        self.flex_die = flex_die

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
            'wits': self.wits,
            'physical defence': self.physical_defence,
            'sorcery defence': self.sorcery_defence,
            'life points': self.life_points,
            'flex die': self.flex_die
        }
    