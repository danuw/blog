import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Written by <strong>{config.userName}</strong>, London, UK.
      {` `}

      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    </p>
  </>
)

export default Bio;