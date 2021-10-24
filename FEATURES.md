## Feature of this Project

This project is built with MERN stacks.
We have two tables of mongoDB cloud database:
  1) Driver - which has unique ID, Full Name
  2) Orders - which has description, cost (dollars), revenue (dollars), reference to Driver(id)

There will be a list of unassigned orders on the left-side within the app && drivers containers with assigned orders in each driver containers.

1) You can drag & drop order items within the same table (changed order will get reset to how database reflects after page refresh, which something can be looked as a followup).

2) You can drag & drop order items between tables, which assigns to different driver or unassign from drivers. It will update the order information as you either assign or unassign the order.

3) You can click on the edit icon placed on the right side of each order, and change the revenue and/or the cost amount. It will update the order with new information to the database as well.

## Possible improvement for future

1) When order of orders change within same table, it will get reset to how database reflects after page refresh, since the client fetches the data from API every refresh.

2) User Database can be added instead of unassigned order being simply unassigned.

3) If user database is added, we can implement login features to show only unassigned/assigned orders for specific user