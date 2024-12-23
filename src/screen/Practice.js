<View style={{ marginHorizontal: 8, marginTop: 4 }}>
          <View style={{ width: "100%", backgroundColor: "#d7dff2", padding: 15, flexDirection: "row", borderRadius: 10 }}>

            {/* Image Section */}
            <View style={{ width: "30%", height: 115, borderRadius: 10, overflow: "hidden" }}>
              <Image
                source={require('../assets/ac2.jpg')}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>

            {/* Details Section */}
            <View style={{ width: "70%", paddingLeft: 10 }}>
              {/* Name */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="user-o"
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    color: "#172647",
                    backgroundColor: "#d7dff2", padding: 5, borderRadius: 50
                  }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  Pollab Kumar
                </Text>
              </View>

              {/* Experience */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  4.5+ years
                </Text>
              </View>

              {/* Service Name */}
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <Icon
                  name="briefcase"
                  style={{ fontSize: responsiveFontSize(1.8), color: "#172647", backgroundColor: "#d7dff2", padding: 5, borderRadius: 50 }}
                />
                <Text style={{ fontSize: responsiveFontSize(1.9), color: "#172647", fontWeight: "500", paddingLeft: 5 }}>
                  AC Installation
                </Text>
              </View>

              {/* Status and Review Section */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                {/* Status */}
                <TouchableOpacity
                  style={{
                    backgroundColor: "#4CAF50",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    alignItems: "center"
                  }}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>Completed</Text>
                </TouchableOpacity>

                {/* Review and Profile */}
                <View style={{ flexDirection: "row" }}>
                  {/* Add Review */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFC107",
                      paddingVertical: 8,
                      paddingHorizontal: 15,
                      borderRadius: 5,
                      marginRight: 10,
                      alignItems: "center"
                    }}>
                    <Text style={{ color: "#172647", fontWeight: "bold" }}>Add Review</Text>
                  </TouchableOpacity>

                  {/* Show Profile */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#172647",
                      paddingVertical: 8,
                      paddingHorizontal: 15,
                      borderRadius: 5,
                      alignItems: "center"
                    }}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>Show Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>