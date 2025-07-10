import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
  },
  toggleRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginRight: 10,
  },
  activeToggle: {
    backgroundColor: '#cce5ff',
  },
  toggleText: {
    marginLeft: 6,
    fontWeight: '600',
  },
  applePayBox: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  appleText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
