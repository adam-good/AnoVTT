from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from webapp.database import Base

class Statblock(Base):
    __tablename__ = "statblocks"

    id:     Mapped[int]         = mapped_column(Integer, primary_key=True)
    name:   Mapped[str | None]  = mapped_column(String(50), unique=True) 
    might:  Mapped[int | None]  = mapped_column(Integer)
    edge:   Mapped[int | None]  = mapped_column(Integer) 
    grit:   Mapped[int | None]  = mapped_column(Integer)
    wits:   Mapped[int | None]  = mapped_column(Integer)
    physical_defence: Mapped[int | None] = mapped_column(Integer)
    sorcery_defence:  Mapped[int | None] = mapped_column(Integer)
    life_points:      Mapped[int | None] = mapped_column(Integer)
    stamina_points:   Mapped[int | None] = mapped_column(Integer)
    flex_die:         Mapped[str | None] = mapped_column(String) # TODO: This will probably need some logic

    def __init__(self,
                 name:     str|None = None, might:       int|None = None, 
                 edge:     int|None = None, grit:        int|None = None, 
                 wits:     int|None = None, phy_def:     int|None = None,
                 sor_def:  int|None = None, life_points: int|None = None, 
                 flex_die: str|None = None):
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
    def serialize(self) -> dict[str, object]:
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
    