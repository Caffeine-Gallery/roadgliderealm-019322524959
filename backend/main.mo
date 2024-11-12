import Text "mo:base/Text";

actor {
    // Stable storage for bike information
    private stable let bikeSpecs : [(Text, Text)] = [
        ("Engine", "Milwaukee-Eight® 114"),
        ("Displacement", "114 cu in (1,868 cc)"),
        ("Torque", "118 ft-lb @ 3,250 rpm"),
        ("Fuel System", "Electronic Sequential Port Fuel Injection (ESPFI)"),
        ("Transmission", "6-Speed Cruise Drive®"),
        ("Front Tire", "130/60B19 61H"),
        ("Rear Tire", "180/55B18 80H"),
        ("Fuel Capacity", "6 gallons"),
        ("Weight", "820 lbs"),
        ("Price", "Starting at $23,999")
    ];

    private stable let bikeFeatures : [Text] = [
        "Sharknose fairing with splitstream vent",
        "Boom!™ Box GTS infotainment system",
        "Daymaker® LED headlamp",
        "Reflex™ Defensive Rider Systems (RDRS)",
        "Dual Bending Valve front suspension",
        "Premium touring rear suspension",
        "Dual Daymaker® LED fog lamps",
        "One-touch opening saddlebags"
    ];

    private stable let imageUrls : [Text] = [
        "https://cdp.azureedge.net/products/USA/HD/2024/MC/TOURING/ROAD_GLIDE/50/VIVID_BLACK/2000000001.jpg",
        "https://cdp.azureedge.net/products/USA/HD/2024/MC/TOURING/ROAD_GLIDE/50/VIVID_BLACK/2000000002.jpg",
        "https://cdp.azureedge.net/products/USA/HD/2024/MC/TOURING/ROAD_GLIDE/50/VIVID_BLACK/2000000003.jpg",
        "https://cdp.azureedge.net/products/USA/HD/2024/MC/TOURING/ROAD_GLIDE/50/VIVID_BLACK/2000000004.jpg"
    ];

    // Query functions
    public query func getSpecs() : async [(Text, Text)] {
        bikeSpecs
    };

    public query func getFeatures() : async [Text] {
        bikeFeatures
    };

    public query func getImages() : async [Text] {
        imageUrls
    };
}
