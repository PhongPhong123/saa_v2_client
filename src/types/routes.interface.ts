import React from 'react';

export default interface IRoutes {
    path: string;
    component: React.FC;
    layout?: React.FC;
}