---
date: 2020-10-12
title: 'New query COUNT functionality for Azure Digital Twins'
thumbnail: './images/2020-10-12-count/count-query.png'
cover: "./images/2020-10-12-count/count-query.png"
categories: 
    - iot projects
tags: 
    - iot
    - azure iot
    - azure digital twins (adt)
    - smart building
---

A quick one in case people did not notice it is now possible to use COUNT in queries to the Digital Twins v2.

Very basic, but makes a big difference in practice.

```sql
SELECT COUNT() FROM DIGITALTWINS
```

returned ...

```json
{
  "COUNT": 547
}
```

Should help with a lot of basic scenarios for showing totals on dashboards, notifications badges, or simply paging...

Anyway, more on queries at [https://docs.microsoft.com/en-us/azure/digital-twins/how-to-query-graph#count-items](https://docs.microsoft.com/en-us/azure/digital-twins/how-to-query-graph#count-items)