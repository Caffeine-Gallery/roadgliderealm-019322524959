export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getFeatures' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getImages' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getSpecs' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
