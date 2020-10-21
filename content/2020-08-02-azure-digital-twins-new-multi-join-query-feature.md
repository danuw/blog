---
date: 2020-08-02
preview: false
title: 'Azure Digital Twins new Multi join query feature'
thumbnail: '../thumbnails/wp.png'
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - iot projects
tags: 
    - iot
    - azure iot
    - azure digital twins (adt)
    - smart building
---

Microsoft's Azure Digital Twins Preview v2 team has released a new feature. It allows to query the twin graph with up to 5 joins.

Concretely, what that has meant for me is that I can surface some aggregates a lot more easily. In my case, I have a list of buildings, that have floors, that have zones, that have desks and rooms (aka Spaces), and finally that have sensors.

I needed to be able to run quick aggregate from the building or floor perspective. For example, using occupancy sensors, this allows me to quickly find out occupancy per floor.

The following would return all the nodes (all sensors in my case) contained in my spaces (i.e. desks and rooms):

```sql
SELECT Sensor
FROM DIGITALTWINS Building
JOIN Floor RELATED Building.contains
JOIN Zone RELATED Floor.contains
JOIN Space RELATED Zone.contains
JOIN Sensor RELATED Space.contains
WHERE Building.$dtId = 'myBuildingId'
```

See [github issue](https://github.com/Azure-Samples/digital-twins-samples/issues/24) for references.


What challenge did that solve for you? Use Twitter (#AdtMultiJoin?) to let me know... :)
