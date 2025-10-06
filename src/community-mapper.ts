/** 
 * Original object :
 * 
 {
        "community_id": "0198f0f1-044e-71ab-af97-d53d3c5d3943",
        "community_name": "04 - Climate, Energy Transition & Decarbonization",
        "Community0": [
          {
            "community_parent": "ENGIE Data Map",
            "community_parent_id": "0198f0ed-308d-7461-baf5-146f7acf8ff6"
          }
        ],
        "Responsibility1": [
          {
            "User2": [
              {
                "user_id": "0b7ebd2b-f4a4-4c97-a389-771eb13cb615",
                "user_first_name": "Guillaume",
                "user_last_name": "ROZANT"
              }
            ],
            "Role3": [
              {
                "role_name": "Chief Data Officer"
              }
            ]
          },
          {
            "User2": [
              {
                "user_id": "019999c5-8358-797c-bd58-59d35a80501f",
                "user_first_name": "Florence",
                "user_last_name": "FOUCQUET"
              }
            ],
            "Role3": [
              {
                "role_name": "Data Domain Owner"
              }
            ]
          }
        ]
      }
 
*/

/**
 * Mapped Object : DataDomain
 */

export type DomainStatus = "red" | "orange" | "green";

export interface DataDomain {
  id: string;
  title: string;
  description: string;
  owner: string;
  ownerStatus: "assigned" | "unassigned";
  cdo: string;
  status: DomainStatus;
  subdomains: DataDomain[];
  dataProducts: number;
  masterData: number;
  referenceData: number;
}

export default function communityMapper() {}
