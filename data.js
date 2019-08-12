var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.032334520532813826,
        "pitch": -0.014371599518891998,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": -1.0416524180528803,
          "pitch": 0.34158192644851226,
          "rotation": 0,
          "target": "1-lounge"
        },
        {
          "yaw": 1.9243940970869202,
          "pitch": 0.4608848673748547,
          "rotation": 0,
          "target": "2-master"
        },
        {
          "yaw": -0.027781064585935766,
          "pitch": 0.1786542463188976,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8878847447004095,
          "pitch": 0.19297189672372106,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": -0.7652554449328459,
          "pitch": 0.11488764905152138,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5641910147893983,
          "pitch": 0.18930176685471878,
          "rotation": 0,
          "target": "1-lounge"
        },
        {
          "yaw": 2.6129378838686304,
          "pitch": 0.3979063498475366,
          "rotation": 0,
          "target": "3-wir"
        },
        {
          "yaw": -2.8069380341629895,
          "pitch": 0.48070086587950556,
          "rotation": 0,
          "target": "4-ensuite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wir",
      "name": "WIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.9115317711446735,
        "pitch": 0.06635508810108526,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": -1.5956265780446603,
          "pitch": 0.43651684927480083,
          "rotation": 0,
          "target": "2-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.6385101119490635,
        "pitch": 0.2558144714363735,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": -2.8895132166353577,
          "pitch": 0.43238306012671757,
          "rotation": 0,
          "target": "2-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.8063436442776233,
        "pitch": 0.15521108662191807,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": 0.8925933261493011,
          "pitch": 0.21708411679877848,
          "rotation": 0,
          "target": "2-master"
        },
        {
          "yaw": 2.0910728374754592,
          "pitch": 0.24404731724360573,
          "rotation": 0,
          "target": "1-lounge"
        },
        {
          "yaw": -1.141004550031063,
          "pitch": 0.20697844764072215,
          "rotation": 0,
          "target": "6-study"
        },
        {
          "yaw": -1.5930799667983457,
          "pitch": 0.20514105350988032,
          "rotation": 0,
          "target": "7-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.7948873783339554,
        "pitch": 0.02142821413587903,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": -2.502150324258448,
          "pitch": 0.27671784188382986,
          "rotation": 0,
          "target": "5-passage"
        },
        {
          "yaw": 2.5651944017761377,
          "pitch": 0.26944695067345314,
          "rotation": 0,
          "target": "7-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-meals",
      "name": "Meals",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.09304944685168692,
        "pitch": 0.012183558114367443,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": 0.610842741343383,
          "pitch": 0.22297017846952016,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -0.3271147018917109,
          "pitch": 0.03535780836424429,
          "rotation": 0,
          "target": "9-family"
        },
        {
          "yaw": -1.1348726513775063,
          "pitch": 0.1726601915850381,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.16563561506949043,
        "pitch": 0.06634070604735776,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": 0.03128040213093897,
          "pitch": 0.06313774208083167,
          "rotation": 0,
          "target": "9-family"
        },
        {
          "yaw": -1.690957134637479,
          "pitch": 0.25802721520388516,
          "rotation": 0,
          "target": "7-meals"
        },
        {
          "yaw": -1.0645225879853069,
          "pitch": 0.051937377562577325,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.7988993711823404,
        "pitch": -0.00959333300182763,
        "fov": 1.281424145235483
      },
      "linkHotspots": [
        {
          "yaw": -0.5642055664248478,
          "pitch": 0.13371959472766726,
          "rotation": 0,
          "target": "7-meals"
        },
        {
          "yaw": -1.478925409163633,
          "pitch": 0.1440585003326582,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -2.076303773168977,
          "pitch": 0.17576327493426191,
          "rotation": 0,
          "target": "10-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1141514236584475,
          "pitch": 0.16081585961316947,
          "rotation": 0,
          "target": "12-laundry"
        },
        {
          "yaw": 1.148618497974537,
          "pitch": 0.2756454810773725,
          "rotation": 0,
          "target": "14-bedroom3"
        },
        {
          "yaw": 2.714817280096055,
          "pitch": 0.19049478913819762,
          "rotation": 0,
          "target": "14-bedroom3"
        },
        {
          "yaw": -2.239886967014808,
          "pitch": 0.20469069467735324,
          "rotation": 0,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.315356448277935,
          "pitch": 0.3847175211991072,
          "rotation": 0,
          "target": "10-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3915268197372175,
          "pitch": 0.18735086329399664,
          "rotation": 0,
          "target": "10-corridor"
        },
        {
          "yaw": 1.6412385222015349,
          "pitch": 0.1644157089800018,
          "rotation": 0,
          "target": "11-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0777014483493668,
          "pitch": 0.36733021776708696,
          "rotation": 0,
          "target": "10-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom3",
      "name": "Bedroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.255490616866953,
          "pitch": 0.217710274411834,
          "rotation": 0,
          "target": "10-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "caprice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
