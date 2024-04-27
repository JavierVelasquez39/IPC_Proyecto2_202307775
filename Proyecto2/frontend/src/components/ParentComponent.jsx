import React from 'react';
import { useState } from 'react';
import NuevoForo from '../pages/NuevoForo';

import React, { useState } from 'react';
import NuevoForo from '../pages/NuevoForo';

function ParentComponent() {
    const [posts, setPosts] = useState([]);

    return <NuevoForo setPosts={setPosts} />;
}

export default ParentComponent;