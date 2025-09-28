from sqlalchemy.orm import Session
from . import models, schemas

def get_order(db: Session, order_id: int):
    return db.query(models.Order).filter(models.Order.id == order_id).first()

def get_orders(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Order).offset(skip).limit(limit).all()

def create_order(db: Session, order: schemas.OrderCreate):
    db_order = models.Order(item=order.item, quantity=order.quantity, price=order.price)
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order
