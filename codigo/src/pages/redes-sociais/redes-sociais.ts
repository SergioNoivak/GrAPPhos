import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';

/**
 * Generated class for the RedesSociaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redes-sociais',
  templateUrl: 'redes-sociais.html',
})
export class RedesSociaisPage {

  protected presetGraph:any;
  protected grafoMaster : ConfiguradorDeAreaDeDesenho;
  protected grafoInterface: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grafoMaster = new ConfiguradorDeAreaDeDesenho;
    this.presetGraph = [{
      "elements": {
        "nodes": [
          {
            "data": {
              "weight": 10,
              "label": 1,
              "id": "c400a6e7-8076-4008-9e77-ff0559751d08"
            },
            "position": {
              "x": 125,
              "y": 133
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 2,
              "id": "f7a7a363-fa1c-4d4e-ba7d-d23f5dde18e2"
            },
            "position": {
              "x": 39,
              "y": 73
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 3,
              "id": "f7bee660-c148-41ac-8efd-48317b2414e7"
            },
            "position": {
              "x": 214,
              "y": 128
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 4,
              "id": "0b3e4f4c-50f3-446f-97a1-095a7f0f60a9"
            },
            "position": {
              "x": 241,
              "y": 28
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 5,
              "id": "fbc51401-c9c9-44a7-a2cf-fcbade28152b"
            },
            "position": {
              "x": 136,
              "y": 233
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 6,
              "id": "e2f0c11f-cbc6-4f93-8a90-98302d8b01f2"
            },
            "position": {
              "x": 261,
              "y": 208
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 7,
              "id": "9fb4086b-8b24-4c05-a25e-a5c5ffeba87a"
            },
            "position": {
              "x": 61,
              "y": 180
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 8,
              "id": "a58713ff-3e57-40ea-aa84-0d8b0911b180"
            },
            "position": {
              "x": 132,
              "y": 40
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 9,
              "id": "2a3bf636-cb4c-4478-8e47-f3752c8017fc"
            },
            "position": {
              "x": 181,
              "y": 180
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 10,
              "id": "609eed1e-f67a-4eee-b9b7-1b3497d0096c"
            },
            "position": {
              "x": 275,
              "y": 76
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 11,
              "id": "aed8c344-563e-4139-abd9-5d294484c3ff"
            },
            "position": {
              "x": 294,
              "y": 122
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 12,
              "id": "384dd9cf-2472-4d7a-9efe-6244f6722839"
            },
            "position": {
              "x": 206,
              "y": 229
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 13,
              "id": "d4103a25-1374-4074-8d5a-70c11baa7f8d"
            },
            "position": {
              "x": 174,
              "y": 72
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 14,
              "id": "68008756-5c7d-4f78-987e-39f2cca041ea"
            },
            "position": {
              "x": 67,
              "y": 117
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 15,
              "id": "ba48170a-5e2f-4a91-90f5-e6362e379af8"
            },
            "position": {
              "x": 113,
              "y": 187
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          }
        ]
      },
      "style": [
        {
          "selector": "node",
          "style": {
            "label": "data(label)"
          }
        }
      ],
      "zoomingEnabled": true,
      "userZoomingEnabled": true,
      "zoom": 1,
      "minZoom": 1e-50,
      "maxZoom": 1e+50,
      "panningEnabled": true,
      "userPanningEnabled": true,
      "pan": {
        "x": -6.5,
        "y": 13.5
      },
      "boxSelectionEnabled": true,
      "renderer": {
        "name": "canvas"
      }
    },
    {
      "elements": {
        "nodes": [
          {
            "data": {
              "weight": 10,
              "label": 1,
              "id": "f732d2a6-e909-4f26-ad77-e3e5db5d595e"
            },
            "position": {
              "x": 155,
              "y": 134
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 2,
              "id": "253174a9-25a1-44f1-8f3a-02489b74ff62"
            },
            "position": {
              "x": 89,
              "y": 89
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 3,
              "id": "fc7ac1b3-32fd-435d-b3dc-cf9567b891ce"
            },
            "position": {
              "x": 220,
              "y": 85
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 4,
              "id": "522b8178-688c-4c2b-972d-0bf0028ed476"
            },
            "position": {
              "x": 80,
              "y": 240
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 5,
              "id": "34e5fbe0-a124-4350-980c-e8aefdc79909"
            },
            "position": {
              "x": 239,
              "y": 247
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 6,
              "id": "1e5a5c1e-6172-4220-b2ce-d41bc400e0e3"
            },
            "position": {
              "x": 286,
              "y": 154
            },
            "group": "nodes",
            "removed": false,
            "selected": true,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 7,
              "id": "de4b17f7-f86d-4419-a2b8-581d4ac36e59"
            },
            "position": {
              "x": 32,
              "y": 165
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 8,
              "id": "192ebb6e-87e4-4fde-a07c-997c9788615d"
            },
            "position": {
              "x": 169,
              "y": 203
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          }
        ],
        "edges": [
          {
            "data": {
              "label": "1",
              "source": "253174a9-25a1-44f1-8f3a-02489b74ff62",
              "target": "f732d2a6-e909-4f26-ad77-e3e5db5d595e",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "051d31ed-685d-4ba5-b07d-61f7866db22e"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "253174a9-25a1-44f1-8f3a-02489b74ff62",
              "target": "de4b17f7-f86d-4419-a2b8-581d4ac36e59",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "7dd6bf85-7ac1-48a3-808e-a60503ad1959"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "de4b17f7-f86d-4419-a2b8-581d4ac36e59",
              "target": "522b8178-688c-4c2b-972d-0bf0028ed476",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "d47c4293-d73d-490a-9e0d-245c7061d9c9"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "192ebb6e-87e4-4fde-a07c-997c9788615d",
              "target": "522b8178-688c-4c2b-972d-0bf0028ed476",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "e6a82d90-cdcc-45b4-a412-dd7627c20ae9"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "192ebb6e-87e4-4fde-a07c-997c9788615d",
              "target": "34e5fbe0-a124-4350-980c-e8aefdc79909",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "0bf3ef4e-8ba0-46e7-b72b-9047863cd3fb"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "f732d2a6-e909-4f26-ad77-e3e5db5d595e",
              "target": "fc7ac1b3-32fd-435d-b3dc-cf9567b891ce",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "f2aea403-f349-4358-9e27-8d3c15e27b64"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "fc7ac1b3-32fd-435d-b3dc-cf9567b891ce",
              "target": "1e5a5c1e-6172-4220-b2ce-d41bc400e0e3",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "137c2d3b-0940-40c1-8d6e-ee22a170078a"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "1e5a5c1e-6172-4220-b2ce-d41bc400e0e3",
              "target": "34e5fbe0-a124-4350-980c-e8aefdc79909",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "5331a15c-bf09-496b-bd88-19e7482ad7b5"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "192ebb6e-87e4-4fde-a07c-997c9788615d",
              "target": "fc7ac1b3-32fd-435d-b3dc-cf9567b891ce",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "fa689196-7993-47f4-b441-28fece9871ff"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "de4b17f7-f86d-4419-a2b8-581d4ac36e59",
              "target": "1e5a5c1e-6172-4220-b2ce-d41bc400e0e3",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "e519800d-f93a-4c3b-91ce-892301fed641"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          }
        ]
      },
      "style": [
        {
          "selector": "node",
          "style": {
            "label": "data(label)"
          }
        }
      ],
      "zoomingEnabled": true,
      "userZoomingEnabled": true,
      "zoom": 1,
      "minZoom": 1e-50,
      "maxZoom": 1e+50,
      "panningEnabled": true,
      "userPanningEnabled": true,
      "pan": {
        "x": 1,
        "y": -22
      },
      "boxSelectionEnabled": true,
      "renderer": {
        "name": "canvas"
      }
    },
    {
      "elements": {
        "nodes": [
          {
            "data": {
              "weight": 10,
              "label": 1,
              "id": "73b7d6b2-052a-40ff-a394-1640e26d2b81"
            },
            "position": {
              "x": 57,
              "y": 71
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 2,
              "id": "0b355f7b-f6eb-4495-b732-7b4f963487c7"
            },
            "position": {
              "x": 236,
              "y": 23
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 3,
              "id": "f64545e9-2beb-4d91-9b2d-cfa32aa97c25"
            },
            "position": {
              "x": 49,
              "y": 253
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 4,
              "id": "290af085-e0ef-43fe-b545-f43cf73c59a3"
            },
            "position": {
              "x": 274,
              "y": 202
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 5,
              "id": "62aec08f-55c0-4a8e-a3d2-949c7a20f423"
            },
            "position": {
              "x": 114,
              "y": 172
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 6,
              "id": "8397ed4f-6ce7-403b-8527-e5ea1ac247d9"
            },
            "position": {
              "x": 28,
              "y": 173
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 7,
              "id": "21460f48-b9a1-4b98-a000-57083cd14c56"
            },
            "position": {
              "x": 134,
              "y": 78
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 8,
              "id": "04570c71-e39f-421a-86eb-11a28632c630"
            },
            "position": {
              "x": 139,
              "y": 262
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 9,
              "id": "31677233-cb3a-44d2-9556-523df11b2f55"
            },
            "position": {
              "x": 280,
              "y": 72
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 10,
              "id": "efb13cb8-b088-4948-b52e-aa809c7a7759"
            },
            "position": {
              "x": 243,
              "y": 96
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 11,
              "id": "f0eb1bb3-343b-42e9-9bbc-c17e44eb482e"
            },
            "position": {
              "x": 284,
              "y": 18
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 12,
              "id": "b29ff8ab-52cd-44eb-8072-f30e96e719fe"
            },
            "position": {
              "x": 207,
              "y": 226
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 13,
              "id": "55073b7b-37d0-4dcb-8e23-5efd4bee001d"
            },
            "position": {
              "x": 258,
              "y": 254
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 14,
              "id": "2bbf2728-4a1d-46aa-8ff9-09f1a626015c"
            },
            "position": {
              "x": 301,
              "y": 241
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 15,
              "id": "527cd338-76a9-46a7-a1e5-fbb7bcbd1db4"
            },
            "position": {
              "x": 150,
              "y": 213
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 16,
              "id": "137a789c-3c46-46c1-ab86-cefe3a5c79ee"
            },
            "position": {
              "x": 99,
              "y": 35
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 17,
              "id": "98234250-295a-4ac7-ba81-f528bc49042f"
            },
            "position": {
              "x": 83,
              "y": 108
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 18,
              "id": "2f191e37-fb0d-4f75-8792-95260276e212"
            },
            "position": {
              "x": 228,
              "y": 176
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 19,
              "id": "826603ae-8392-46b6-a822-97c357941e60"
            },
            "position": {
              "x": 177,
              "y": 57
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 20,
              "id": "2baf187b-ed3c-4c76-9566-31c5c488d742"
            },
            "position": {
              "x": 284,
              "y": 120
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 21,
              "id": "35f7f8c3-b203-4d55-ae25-804c96e71cfb"
            },
            "position": {
              "x": 63,
              "y": 184
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "weight": 10,
              "label": 22,
              "id": "5d4ea829-243e-47cd-9f25-f920054d2112"
            },
            "position": {
              "x": 136,
              "y": 125
            },
            "group": "nodes",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          }
        ],
        "edges": [
          {
            "data": {
              "label": "1",
              "source": "73b7d6b2-052a-40ff-a394-1640e26d2b81",
              "target": "98234250-295a-4ac7-ba81-f528bc49042f",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "f61fe4bc-1208-402c-855e-ca25c29eaee8"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "73b7d6b2-052a-40ff-a394-1640e26d2b81",
              "target": "137a789c-3c46-46c1-ab86-cefe3a5c79ee",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "ac859ee0-2e37-4cd3-bddf-a04b9d55b2f6"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "137a789c-3c46-46c1-ab86-cefe3a5c79ee",
              "target": "21460f48-b9a1-4b98-a000-57083cd14c56",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "0d463962-ebd5-4100-9f15-66a2f8b84548"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "98234250-295a-4ac7-ba81-f528bc49042f",
              "target": "21460f48-b9a1-4b98-a000-57083cd14c56",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "ecc3d0a6-a2fe-4758-b64c-49664388f9e9"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "98234250-295a-4ac7-ba81-f528bc49042f",
              "target": "62aec08f-55c0-4a8e-a3d2-949c7a20f423",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "3b4a7551-9d07-410d-accb-472318593f2b"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "62aec08f-55c0-4a8e-a3d2-949c7a20f423",
              "target": "f64545e9-2beb-4d91-9b2d-cfa32aa97c25",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "ca18fb14-f9d3-46b2-84a9-7115b6b5b6a6"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "f64545e9-2beb-4d91-9b2d-cfa32aa97c25",
              "target": "04570c71-e39f-421a-86eb-11a28632c630",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "22da6ce5-84be-4753-be5e-dc1feee95f0e"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "527cd338-76a9-46a7-a1e5-fbb7bcbd1db4",
              "target": "04570c71-e39f-421a-86eb-11a28632c630",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "ebbdbe5d-40af-4da5-acc0-3592217dac4e"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "62aec08f-55c0-4a8e-a3d2-949c7a20f423",
              "target": "527cd338-76a9-46a7-a1e5-fbb7bcbd1db4",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "113e8403-ae48-4488-9140-5a4cd9987319"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "62aec08f-55c0-4a8e-a3d2-949c7a20f423",
              "target": "efb13cb8-b088-4948-b52e-aa809c7a7759",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "532b1816-9670-4875-86b5-cdc98421cf9e"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "efb13cb8-b088-4948-b52e-aa809c7a7759",
              "target": "0b355f7b-f6eb-4495-b732-7b4f963487c7",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "7ed1011b-dc09-4f57-8ba8-69337ad29e50"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "efb13cb8-b088-4948-b52e-aa809c7a7759",
              "target": "31677233-cb3a-44d2-9556-523df11b2f55",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "3309af90-e617-488c-8f54-67de9b26c089"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "b29ff8ab-52cd-44eb-8072-f30e96e719fe",
              "target": "290af085-e0ef-43fe-b545-f43cf73c59a3",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "8d932b7a-6bbb-40e5-b8dc-90106c56be81"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "b29ff8ab-52cd-44eb-8072-f30e96e719fe",
              "target": "55073b7b-37d0-4dcb-8e23-5efd4bee001d",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "33e99d4c-7df4-4788-af50-4ebf05b9ff50"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "55073b7b-37d0-4dcb-8e23-5efd4bee001d",
              "target": "2bbf2728-4a1d-46aa-8ff9-09f1a626015c",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "9867c1f4-af9b-4735-b5f5-8cd324e32c89"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          },
          {
            "data": {
              "label": "1",
              "source": "826603ae-8392-46b6-a822-97c357941e60",
              "target": "b29ff8ab-52cd-44eb-8072-f30e96e719fe",
              "directed": true,
              "style": {
                "line-color": "#FFF"
              },
              "id": "1934ed3b-c5c4-496d-8497-26e0dd0751ef"
            },
            "position": {},
            "group": "edges",
            "removed": false,
            "selected": false,
            "selectable": true,
            "locked": false,
            "grabbable": true,
            "classes": ""
          }
        ]
      },
      "style": [
        {
          "selector": "node",
          "style": {
            "label": "data(label)"
          }
        }
      ],
      "zoomingEnabled": true,
      "userZoomingEnabled": true,
      "zoom": 1,
      "minZoom": 1e-50,
      "maxZoom": 1e+50,
      "panningEnabled": true,
      "userPanningEnabled": true,
      "pan": {
        "x": -4.5,
        "y": 4
      },
      "boxSelectionEnabled": true,
      "renderer": {
        "name": "canvas"
      }
    }
    ]
  }

  popPage() {
    this.navCtrl.pop();
  }

  loadGraph(index){
    this.grafoInterface.json(this.presetGraph[index])
  }

  ionViewDidLoad() {
    this.grafoInterface = this.grafoMaster.gerarGrafo("redesGrafo");
    this.grafoInterface.json(this.presetGraph[0]);
    this.grafoMaster.eventoDeRedes(this.grafoInterface);
    this.grafoMaster.possivelCriarNo = 1;
  }

}
