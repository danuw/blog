---
date: 2020-09-01
title: 'Using tags with Azure Digital Twins'
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

The latest version Azure Digital Twins' DTDL (Digital Twin Definition Language v2) supports a wide variety of schemas.

One of them is the ability to add tags using a [Map](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#map).

The documentation found [here](https://docs.microsoft.com/en-us/azure/digital-twins/how-to-use-tags) shows you how to leverage the Map type to add [marker](https://docs.microsoft.com/en-us/azure/digital-twins/how-to-use-tags#marker-tags) or [value](https://docs.microsoft.com/en-us/azure/digital-twins/how-to-use-tags#value-tags) tags.

The following in the case of a value tag.

```json
{
  "@type": "Property",
  "name": "tags",
  "schema": {
    "@type": "Map",
    "mapKey": {
      "name": "tagName",
      "schema": "string"
    },
    "mapValue": {
      "name": "tagValue",
      "schema": "string"
    }
  }
}
```

... but I did not easily find examples of how to create new twins in code using these more complex schemas ([Map](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#map), [Array](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#array), [Enum](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#enum), [object](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#object)).

So to stay on the [example](https://docs.microsoft.com/en-us/azure/digital-twins/how-to-use-tags#add-value-tags-to-digital-twins) from the Microsoft's documentation, to add tags using the Map schema, you can create a ```Dictionary<string, string>``` to add tags to your metadata as follows.

```csharp
myTwinMetadata.Add($"tags", new Dictionary<string, string>() { { "red", "" }, { "size", "large" } });
```

What would or do you use the tags for?

Feel free to message on twitter to let me know...
