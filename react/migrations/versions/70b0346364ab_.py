"""empty message

Revision ID: 70b0346364ab
Revises: 0de3cd6232cc
Create Date: 2022-06-07 15:38:46.593855

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70b0346364ab'
down_revision = '0de3cd6232cc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart', sa.Column('product_id', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart', 'product_id')
    # ### end Alembic commands ###
