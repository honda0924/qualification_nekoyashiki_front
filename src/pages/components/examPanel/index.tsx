import React from 'react';
import "./style.css";
import Done from "@material-ui/icons/Done";
import  Edit from "@material-ui/icons/Edit";
import  Add from "@material-ui/icons/Add";


export const ExamPanel = () => {
  return (
    <div className="exam-panel__wrapper">
      <div className='exam-panel__element'>
        <div className="exam-panel__element__title">
          Java Silver
        </div>
        <div className="exam-panel__element__actions">
          <Edit className="exam-panel__element__actions__icon"></Edit>
          <Done className="exam-panel__element__actions__icon"></Done>
        </div>

      </div>
      <div className='exam-panel__element'>
        <div className="exam-panel__element__title">
          新規試験を追加
        </div>
        <div className="exam-panel__element__actions">
          <Add className="exam-panel__element__actions__icon"></Add>
        </div>
      </div>
    </div>
  );
};