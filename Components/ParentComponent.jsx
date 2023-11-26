import React, { useState } from 'react';
import UserInformation from './UserInformation';
import ButtonUser from './ButtonUser';
import ButtonMagnifier from './ButtonMagnifier';


const ParentComponent = () => {
  const [showButtons, setShowButtons] = useState(true);

  const handleToggleButtons = (show) => {
    setShowButtons(show);
  };

  return (
    <View style={{ flex: 1 }}>
      {showButtons && <ButtonUser onPress={() => handleToggleButtons(false)} />}
      {!showButtons && <ButtonMagnifier onPress={() => handleToggleButtons(true)} />}

      <UserInformation
        onToggleButtons={handleToggleButtons}
        showButtonUser={showButtonUser}
      />
    </View>
  );
};

export default ParentComponent;