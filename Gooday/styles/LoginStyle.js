import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginBottom: 20,
  },
  label: {
    marginTop: 22,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f2ff",
    padding: 18,
    borderRadius: 8,
    marginTop: 5,
  },
  senha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  esqueci: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent:"space-between"
  },
  lembrarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  esqueciTexto: {
    fontWeight: "500",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#14c871",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button1: {
    backgroundColor: "#14c871",
    padding: 19,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#14c871",
    padding: 19,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  ou: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});