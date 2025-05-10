from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base
# from webapp.models import *

engine = create_engine("sqlite:///instance/project.db")
session = scoped_session(sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
))

Base = declarative_base()
Base.query = session.query_property()

def init_db():
    import webapp.models.user
    Base.metadata.create_all(bind=engine)