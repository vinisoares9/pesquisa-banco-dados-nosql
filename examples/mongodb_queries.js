db.users.aggregate([
  { $group: { _id: "$country", total: { $sum: 1 } } },
  { $match: { total: { $gt: 100 } } }
])
