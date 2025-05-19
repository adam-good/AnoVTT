from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base

engine = create_engine("sqlite:///instance/project.db")
session = scoped_session(sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
))

Base = declarative_base()
Base.query = session.query_property()

def init_db():
    from .models.statblock import Statblock  # type: ignore[unused-variable]
    from .models.user import User            # type: ignore[unused-variable]
    Base.metadata.create_all(bind=engine)