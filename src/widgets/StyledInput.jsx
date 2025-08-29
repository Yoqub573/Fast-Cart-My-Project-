import React from 'react';

const StyledInput = ({ name,defaultValue }) => {
	return (
		<div className="flex flex-col w-[100%] border border-[#E5E5E5] rounded-[4px]">
			<div className='border-b-[#E5E5E5] px-[17.08px] py-[10px] border-b-[1.11px] flex items-center gap-[63.57px]'>
				<p className='text-[#262626] text-[14px] font-[500] '>
					Normal
				</p>
				<div className='flex items-center gap-[27px]'>
					<div className='flex items-center gap-[10px]'>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M5.96875 4.38232H10.4688C10.7971 4.38232 11.1221 4.44347 11.4255 4.56226C11.7288 4.68106 12.0044 4.85518 12.2365 5.07469C12.4687 5.2942 12.6528 5.55479 12.7784 5.84159C12.9041 6.12839 12.9688 6.43578 12.9688 6.74621C12.9688 7.05664 12.9041 7.36403 12.7784 7.65083C12.6528 7.93763 12.4687 8.19823 12.2365 8.41774C12.0044 8.63724 11.7288 8.81137 11.4255 8.93016C11.1221 9.04896 10.7971 9.1101 10.4688 9.1101H5.96875V4.38232Z" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.96875 9.11011H11.4688C12.1318 9.11011 12.7677 9.35916 13.2365 9.80247C13.7054 10.2458 13.9688 10.8471 13.9688 11.474C13.9688 12.1009 13.7054 12.7022 13.2365 13.1455C12.7677 13.5888 12.1318 13.8379 11.4688 13.8379H5.96875V9.11011Z" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
						<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.96094 4.38232H13.9609" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.96094 13.8379H11.9609" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.96094 13.8379L10.9609 4.38232" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.94922 3.43677V9.1101C5.95238 10.1123 6.37483 11.0726 7.12429 11.7812C7.87375 12.4899 8.88933 12.8893 9.94922 12.8923C11.0091 12.8893 12.0247 12.4899 12.7741 11.7812C13.5236 11.0726 13.9461 10.1123 13.9492 9.1101V3.43677" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.4492 14.7834H4.44922C4.17308 14.7834 3.94922 14.9951 3.94922 15.2562C3.94922 15.5173 4.17308 15.729 4.44922 15.729H15.4492C15.7254 15.729 15.9492 15.5173 15.9492 15.2562C15.9492 14.9951 15.7254 14.7834 15.4492 14.7834Z" fill="#262626"/>
            </svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M7.92969 7.21899L11.9297 11.0012" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.82965 4.92792C10.4634 5.48952 10.8518 6.2551 10.9184 7.07394C10.985 7.89277 10.7251 8.70552 10.1897 9.35218C9.50596 9.85999 8.64584 10.1071 7.77893 10.0448C6.91203 9.98249 6.1013 9.61526 5.50665 9.01556C4.11465 7.69178 2.96465 6.65167 5.14665 4.58752C7.32865 2.52337 8.42965 3.61171 9.82965 4.92792Z" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.3516 9.20471C13.7577 8.60549 12.948 8.23822 12.082 8.17522C11.216 8.11222 10.3565 8.35805 9.67261 8.86431C9.1372 9.51096 8.87721 10.3237 8.94384 11.1425C9.01047 11.9614 9.39888 12.727 10.0326 13.2886C11.4246 14.6048 12.5326 15.6922 14.7116 13.629C16.8906 11.5658 15.7436 10.5285 14.3516 9.20471Z" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
					</div>
					<div className='flex items-center gap-[10px]'>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M7.92188 4.38232H15.9219" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.92188 9.11011H15.9219" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.92188 13.8379H15.9219" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.42188 5.80054H5.42188" stroke="#262626" strokeWidth="1.00116" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.42191 6.27343C4.28931 6.27343 4.16213 6.22362 4.06836 6.13496C3.97459 6.0463 3.92191 5.92604 3.92191 5.80066V3.51714L3.64591 3.64763C3.52736 3.7038 3.39007 3.71314 3.26423 3.67359C3.1384 3.63405 3.03433 3.54886 2.97491 3.43677C2.85091 3.20321 2.95191 3.13041 3.19891 3.0141L4.19891 2.54133C4.27511 2.50543 4.35973 2.48851 4.44477 2.49219C4.52981 2.49587 4.61244 2.52002 4.68485 2.56235C4.75726 2.60468 4.81703 2.66378 4.85852 2.73407C4.90001 2.80436 4.92183 2.8835 4.92191 2.96399V5.80066C4.92191 5.92604 4.86924 6.0463 4.77547 6.13496C4.6817 6.22362 4.55452 6.27343 4.42191 6.27343Z" fill="#262626"/>
              <path d="M5.42188 10.5284H3.42188C3.42188 10.3072 5.27188 9.51099 5.27188 8.41604C5.22965 8.22026 5.12023 8.04315 4.9606 7.91222C4.80097 7.78129 4.60008 7.70389 4.38913 7.69203C4.17819 7.68017 3.96901 7.73452 3.7941 7.84664C3.61919 7.95875 3.48833 8.12236 3.42188 8.31203" stroke="#262626" strokeWidth="1.00116" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.42188 14.6379C3.48824 14.8276 3.61901 14.9912 3.79385 15.1034C3.96869 15.2156 4.17781 15.27 4.38874 15.2583C4.59967 15.2465 4.80059 15.1692 4.96029 15.0384C5.11999 14.9076 5.22952 14.7306 5.27188 14.5348C5.28294 14.3686 5.22732 14.2045 5.11611 14.0754C5.0049 13.9462 4.84627 13.8614 4.67188 13.8379C4.8473 13.8171 5.00749 13.7331 5.11921 13.6036C5.23092 13.474 5.28559 13.3087 5.27188 13.142C5.22952 12.9463 5.11999 12.7693 4.96029 12.6384C4.80059 12.5076 4.59967 12.4303 4.38874 12.4186C4.17781 12.4068 3.96869 12.4613 3.79385 12.5734C3.61901 12.6856 3.48824 12.8493 3.42188 13.039" stroke="#262626" strokeWidth="1.00116" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M6.89844 4.38232H15.8984" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.89844 9.11011H15.8984" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.89844 13.8379H15.8984" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
              <ellipse cx="3.89844" cy="4.38232" rx="1" ry="0.945556" fill="#262626"/>
              <ellipse cx="3.89844" cy="9.11011" rx="1" ry="0.945556" fill="#262626"/>
              <ellipse cx="3.89844" cy="13.8379" rx="1" ry="0.945556" fill="#262626"/>
            </svg>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M5.89062 3.43677H13.8906" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.89062 11.9468L10.2406 3.43677" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.8906 11.0012L15.8906 14.7834" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.8906 11.0012L11.8906 14.7834" stroke="#262626" strokeWidth="2.00231" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.39063 13.8379H3.39063C3.11448 13.8379 2.89062 14.0496 2.89062 14.3107C2.89062 14.5718 3.11448 14.7834 3.39063 14.7834H9.39063C9.66677 14.7834 9.89063 14.5718 9.89063 14.3107C9.89063 14.0496 9.66677 13.8379 9.39063 13.8379Z" fill="#262626"/>
          </svg>
				</div>
			</div>
			<input defaultValue={defaultValue} type="text" name={name} required className='p-[20px] flex items-start placeholder:text-[#737373] pb-[150px] outline-none' placeholder='Description *' />
		</div>
	);
};

export default StyledInput;
